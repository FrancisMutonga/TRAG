import "./globals.css";



export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
        <body className="min-h-screen w-screen flex flex-col ">
          <div className="bg-stone-200">
           <main className="flex-grow">{children}</main>
            
          </div>
        </body>
      </html>
  );
}
