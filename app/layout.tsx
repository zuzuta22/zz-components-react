import type { Metadata } from 'next'
import '../_src/scss/styles.scss';
import HamburgerNavigation from '@/_src/components/composites/hamburger-navigation/hamburger-navigation';
import { HamburgerItemsSampleContext } from '@/app/playground/sample-contexts/hamburger-items_sample.context';
import { THEME_COLOR } from '@/_src/constants/theme';

export const metadata: Metadata = {
  title: 'Create Next App',
  description: 'Generated by create next app',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {

  // debug code
  console.log("render layout.tsx");

  return (
    <html lang="en" data-theme={THEME_COLOR}>
      {/* 
        THEME_COLOR should be defined in /app/_constants/themes.ts
       */}
      <body>
        <main>
          <HamburgerNavigation
            linkItems={HamburgerItemsSampleContext}
          />
          {children}
        </main>
      </body>
    </html>
  )
}
