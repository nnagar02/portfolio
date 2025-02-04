
export default function Layout({ children }) {
  return (
    <div className="max-w-4xl mx-auto px-6">
      <header className="py-6 text-xl font-bold text-center">
        Nitish Nagar Portfolio
      </header>
      {children}
      <footer className="py-6 text-center text-sm text-gray-500">
        © {new Date().getFullYear()} Nitish Nagar. All rights reserved.
      </footer>
    </div>
  );
}
