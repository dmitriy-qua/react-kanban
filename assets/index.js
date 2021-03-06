import { render } from 'react-dom'
import Board from '../src'
import getUrlParams from './services/getUrlParams'
import '../src/styles.scss'

const board = {
  columns: [
    {
      id: 0,
      title: 'Column Backlog',
      cards: [
        {
          id: "fff",
          title: 'Card title 1',
          description: 'Card content',
        },
        {
          id: 2,
          title: 'Card title 2',
          description: 'Card content',
        },
        {
          id: 3,
          title: 'Card title 3',
          description: 'Card content',
        },
        {
          id: 4,
          title: 'Card title 4',
          description: 'Card content',
        },
        {
          id: 5,
          title: 'Card title 5',
          description: 'Card content',
        },
        {
          id: 6,
          title: 'Card title 6',
          description: 'Card content',
        },
        {
          id: 7,
          title: 'Card title 7',
          description: 'Card content',
        },
        {
          id: 8,
          title: 'Card title 8',
          description: 'Card content',
        },
      ],
    },
    {
      id: 1,
      title: 'Column Doing',
      cards: [
        {
          id: 9,
          title: 'Card title 9',
          description: 'Card content',
        },
      ],
    },
  ],
}

render(
  <Board
    {...getUrlParams()}
    onColumnRemove={console.log}
    onColumnRename={console.log}
    onCardRemove={console.log}
    initialBoard={board}
  />,
  document.getElementById('app')
)
