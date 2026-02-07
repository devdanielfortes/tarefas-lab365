import "./globals.css";

export const metadata = {
  title: "Gerenciador de Tarefas",
  description: "Aplicacao de tarefas com React Router, Context API e localStorage",
};

export default function RootLayout({ children }) {
  return (
    <html lang="pt-BR">
      <body className="font-sans antialiased min-h-screen bg-background text-foreground">
        {children}
      </body>
    </html>
  );
}
