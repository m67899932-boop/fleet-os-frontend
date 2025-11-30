export const metadata = {
  title: "Sistema OS",
  description: "Frontend funcionando",
};

export default function RootLayout({ children }) {
  return (
    <html lang="pt-br">
      <body>{children}</body>
    </html>
  );
}
