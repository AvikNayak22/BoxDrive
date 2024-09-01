const Footer = () => {
  return (
    <footer className="bg-gray-100 text-gray-800 py-12 dark:bg-[#080808] dark:text-[#C4C9CE]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Footer Top Section */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* Column 1: BoxDrive */}
          <div>
            <h3 className="text-lg font-semibold">BoxDrive</h3>
            <p className="mt-4 text-gray-600 dark:text-[#C4C9CE]">
              Secure and reliable cloud storage for your files and documents.
              Access anywhere, anytime.
            </p>
          </div>

          {/* Column 2: Quick Links */}
          <div>
            <h3 className="text-lg font-semibold">Quick Links</h3>
            <ul className="mt-4 space-y-2">
              <li>
                <a
                  href="#"
                  className="text-gray-600 hover:text-gray-800 dark:text-[#C4C9CE] dark:hover:text-green-600 hover:underline"
                >
                  About Us
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="text-gray-600 hover:text-gray-800 dark:text-[#C4C9CE] dark:hover:text-green-600 hover:underline"
                >
                  Features
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="text-gray-600 hover:text-gray-800 dark:text-[#C4C9CE] dark:hover:text-green-600 hover:underline"
                >
                  Pricing
                </a>
              </li>
              <li>
                <a
                  href="/"
                  className="text-gray-600 hover:text-gray-800 dark:text-[#C4C9CE] dark:hover:text-green-600 hover:underline"
                >
                  Contact
                </a>
              </li>
            </ul>
          </div>

          {/* Column 3: Follow Us */}
          <div>
            <h3 className="text-lg font-semibold">Follow Us</h3>
            <ul className="mt-4 space-y-2">
              <li>
                <a
                  href="https://twitter.com/yourprofile"
                  target="_blank"
                  className="text-gray-600 hover:text-gray-800 dark:text-[#C4C9CE] dark:hover:text-green-600 hover:underline"
                >
                  Twitter
                </a>
              </li>
              <li>
                <a
                  href="https://facebook.com/yourprofile"
                  target="_blank"
                  className="text-gray-600 hover:text-gray-800 dark:text-[#C4C9CE] dark:hover:text-green-600 hover:underline"
                >
                  Facebook
                </a>
              </li>
              <li>
                <a
                  href="https://linkedin.com/yourprofile"
                  target="_blank"
                  className="text-gray-600 hover:text-gray-800 dark:text-[#C4C9CE] dark:hover:text-green-600 hover:underline"
                >
                  LinkedIn
                </a>
              </li>
              <li>
                <a
                  href="https://github.com/yourprofile"
                  target="_blank"
                  className="text-gray-600 hover:text-gray-800 dark:text-[#C4C9CE] dark:hover:text-green-600 hover:underline"
                >
                  GitHub
                </a>
              </li>
            </ul>
          </div>
        </div>

        {/* Footer Bottom Section */}
        <div className="mt-12 border-t border-gray-200 pt-8 dark:border-gray-700">
          <p className="text-center text-gray-500 dark:text-[#C4C9CE]">
            &copy; {new Date().getFullYear()} BoxDrive. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
