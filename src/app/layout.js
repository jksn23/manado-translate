import './globals.css'

export default function RootLayout({ children }) {
  return (
    <html lang="en">
  <script
    type="text/javascript"
    dangerouslySetInnerHTML={{
      __html: `
        var atOptions = {
          'key': '18f90aa1a51e5de0d0176e5a3cc1d7a3',
          'format': 'iframe',
          'height': 90,
          'width': 728,
          'params': {}
        };
        document.write('<scr' + 'ipt type="text/javascript" src="http' + (location.protocol === 'https:' ? 's' : '') + '://distressedsoultabloid.com/18f90aa1a51e5de0d0176e5a3cc1d7a3/invoke.js"></scr' + 'ipt>');
      `
    }}
  />

      {/*
        <head /> will contain the components returned by the nearest parent
        head.js. Find out more at https://beta.nextjs.org/docs/api-reference/file-conventions/head
      */}
      <head />
      <body>{children}
      <a href="https://publishers.adsterra.com/referral/YCALcCZGtM"><img alt="banner" src="https://landings-cdn.adsterratech.com/referralBanners/png/80%20x%2030%20px.png" /></a>
      
      </body>
    </html>
  )
}
