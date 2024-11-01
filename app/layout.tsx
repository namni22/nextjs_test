import Navi from "./component/navi";

/**
 * (폴더)
 * - 폴더명에 괄호가 들어간것은 url에 포함되지 않는다
 * - page.tsx는 다른 페이지들에 영향을 주는게 아니기 때문에 (Home)으로 묶어 분리시켜 보기 좋게 하는것이 좋음
 * - layout.tsx와 not-found
 *
 *
 * metadata
 *
 *
 *
 *
 */
export const metadata = {
  title: "Next.js",
  description: "Generated by Next.js",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="kr">
      <body>
        <Navi />
        {children}
      </body>
    </html>
  );
}
