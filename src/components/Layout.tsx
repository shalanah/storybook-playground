export const Layout = ({ children }: { children: React.ReactNode }) => {
  return (
    <div className="min-h-[100dvh] flex flex-col">
      <header className="bg-gray-800 text-white p-4 h-[max(10dvh,_100px)]">
        Header
      </header>
      <main className="flex-1 p-4">{children}</main>
      <footer className="bg-gray-800 text-white p-4 h-[max(10dvh,_100px)]">
        Footer
      </footer>
    </div>
  );
};
