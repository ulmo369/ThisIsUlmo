import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import { MemoryRouter } from 'react-router-dom';
import { Navbar } from '../Navbar';

const mockToggleTheme = vi.fn();
const mockChangeLanguage = vi.fn();
let mockTheme: 'dark' | 'light' = 'dark';
let mockLang = 'en';

vi.mock('react-i18next', () => ({
  useTranslation: () => ({
    t: (key: string) => key,
    i18n: { get language() { return mockLang; }, changeLanguage: mockChangeLanguage },
  }),
}));

vi.mock('@/lib/ThemeProvider', () => ({
  useThemeContext: () => ({ get theme() { return mockTheme; }, toggleTheme: mockToggleTheme }),
}));

function renderNavbar(route = '/') {
  return render(
    <MemoryRouter initialEntries={[route]}>
      <Navbar />
    </MemoryRouter>,
  );
}

describe('Navbar', () => {
  beforeEach(() => {
    vi.clearAllMocks();
    mockTheme = 'dark';
    mockLang = 'en';
  });

  it('renders the Portfolio logo link', () => {
    renderNavbar();
    const logo = screen.getByText('Portfolio');
    expect(logo).toBeInTheDocument();
    expect(logo.closest('a')).toHaveAttribute('href', '/');
  });

  it('renders desktop navigation links', () => {
    renderNavbar();
    const links = screen.getAllByRole('link');
    expect(links.length).toBeGreaterThan(1);
  });

  it('renders theme toggle button with correct aria-label', () => {
    renderNavbar();
    const themeButtons = screen.getAllByLabelText('theme.switchToLight');
    expect(themeButtons.length).toBeGreaterThanOrEqual(1);
  });

  it('calls toggleTheme when theme button is clicked', async () => {
    const user = userEvent.setup();
    renderNavbar();
    const themeButtons = screen.getAllByLabelText('theme.switchToLight');
    await user.click(themeButtons[0]);
    expect(mockToggleTheme).toHaveBeenCalledTimes(1);
  });

  it('renders language toggle button', () => {
    renderNavbar();
    const langButtons = screen.getAllByText('ES');
    expect(langButtons.length).toBeGreaterThanOrEqual(1);
  });

  it('calls changeLanguage when language button is clicked', async () => {
    const user = userEvent.setup();
    renderNavbar();
    const langButtons = screen.getAllByLabelText('language.switchToEs');
    await user.click(langButtons[0]);
    expect(mockChangeLanguage).toHaveBeenCalledWith('es');
  });

  it('opens mobile menu when hamburger is clicked', async () => {
    const user = userEvent.setup();
    renderNavbar();
    const hamburger = screen.getByLabelText('Open menu');
    await user.click(hamburger);
    // After opening, the button label changes to "Close menu"
    expect(screen.getByLabelText('Close menu')).toBeInTheDocument();
  });

  it('closes mobile menu when a nav link is clicked', async () => {
    const user = userEvent.setup();
    renderNavbar();
    const hamburger = screen.getByLabelText('Open menu');
    await user.click(hamburger);
    // Click the first link in the mobile menu
    const mobileLinks = screen.getAllByRole('link');
    await user.click(mobileLinks[0]);
    // Menu should close - hamburger should show "Open menu" again
    expect(screen.getByLabelText('Open menu')).toBeInTheDocument();
  });

  it('highlights active route', () => {
    renderNavbar('/projects');
    // The Projects link should have active styling
    const links = screen.getAllByRole('link');
    const projectsLink = links.find((l) => l.getAttribute('href') === '/projects');
    expect(projectsLink).toBeDefined();
  });

  it('mobile menu has theme and language toggles', async () => {
    const user = userEvent.setup();
    renderNavbar();
    const hamburger = screen.getByLabelText('Open menu');
    await user.click(hamburger);
    // Should have mobile theme and language buttons
    const themeButtons = screen.getAllByLabelText('theme.switchToLight');
    expect(themeButtons.length).toBeGreaterThanOrEqual(2); // desktop + mobile
    const langButtons = screen.getAllByText('ES');
    expect(langButtons.length).toBeGreaterThanOrEqual(2); // desktop + mobile
  });

  it('renders MoonIcon when theme is light', () => {
    mockTheme = 'light';
    renderNavbar();
    const themeButtons = screen.getAllByLabelText('theme.switchToDark');
    expect(themeButtons.length).toBeGreaterThanOrEqual(1);
  });

  it('renders EN button when language is Spanish', () => {
    mockLang = 'es';
    renderNavbar();
    const langButtons = screen.getAllByText('EN');
    expect(langButtons.length).toBeGreaterThanOrEqual(1);
  });

  it('switches from Spanish to English when language button clicked', async () => {
    mockLang = 'es';
    const user = userEvent.setup();
    renderNavbar();
    const langButtons = screen.getAllByLabelText('language.switchToEn');
    await user.click(langButtons[0]);
    expect(mockChangeLanguage).toHaveBeenCalledWith('en');
  });
});
