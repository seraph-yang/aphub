import { createGetInitialProps } from '@mantine/next';
import Document, { Html, Head, Main, NextScript, DocumentContext, DocumentInitialProps } from 'next/document';

const getInitialProps = createGetInitialProps();

export default class _Document extends Document {
  static getInitialProps = getInitialProps;
  
  render() {
    return (
      <Html lang="en">
        <Head />
        <link rel="preload" href="/fonts/SeraphHandwriting.ttf" as="font" type="font/ttf"/>
        <body>
          <Main />
          <NextScript />
        </body>
      </Html>
    )
  }
}
