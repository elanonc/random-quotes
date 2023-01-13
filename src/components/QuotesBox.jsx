import { Button, Container, Link, Author, Text } from "./styles";

export function QuotesBox({ quote, newQuote }) {
  return (
    <Container>
      <Text >{quote.text}</Text>
      <Author >{quote.author}</Author>
      <Button onClick={newQuote}>
        New Quote
      </Button>
      <Link href="twitter.com/intent/tweet">Tweet</Link>
    </Container>
  )
}