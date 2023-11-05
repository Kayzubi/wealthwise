export interface TolerancePortfolio {
  _id: string
  score: number
  stocks: Stock[]
}

export interface Stock {
  _id: string
  title: string
  value: number
}
