import React from 'react'
import ReactDOM from 'react-dom/client'
import { Document, Page, Text, Font, usePDF, StyleSheet } from '@react-pdf/renderer'
import ArialBold from './arial-bold.ttf'

Font.register({
  family: 'Arial',
  fonts: [
    {
      src: ArialBold,
      fontStyle: 'normal',
      fontWeight: 'bold'
    }
  ]
})

const styles = StyleSheet.create({
  heading: {
    //comment these 2 lines out and it will generate PDF properly
    fontFamily: 'Arial',
    fontWeight: 'bold',

    fontSize: 20,
    color: '#006699'
  }
})

const App = () => {
  const [instance] = usePDF({
    document: (
      <Document title={'Title'} author={'Author'} subject={'Subject'} pageMode="useNone">
        <Page size="A4">
          <Text style={styles.heading}>text1</Text>
          <Text>text2</Text>
          <Text>text3</Text>
        </Page>
      </Document>
    )
  })

  console.log('ArialBold', ArialBold)
  console.log('Font.getRegisteredFonts().', Font.getRegisteredFonts())
  console.log('instance', instance)

  return (
    <a href={instance.url || undefined} download={'filename.pdf'}>
      DOWNLOAD PDF
    </a>
  )
}

const root = ReactDOM.createRoot(document.getElementById('root')!)

root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
)
