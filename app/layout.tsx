import { AuthProvider } from "@/providers/AuthProvider";
import "./globals.css";

export const metadata = {
  title: 'Chat Application',
  description: 'Real-time chat application',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body>
        <AuthProvider>{children}</AuthProvider>
      </body>
    </html>
  );
} 