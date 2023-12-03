import { Table } from '@radix-ui/themes'

const defaultRecords = [
  {
    title: 'Player Name',
    subtitle: 'Position/Role',
    image: 'http://placekitten.com/650/650',
    description: 'Player info',
  },
]

const cardTableColums = [
  {
    title: 'Title',
    key: 'title',
  },
  {
    title: 'Subltitle',
    key: 'subtitle',
  },
  {
    title: 'Image',
    key: 'image',
  },
  {
    title: 'Description',
    key: 'description',
  },
]

export default function MyTable({ columns = defautlColumns, records = cardTableColums }) {
  return (
    <Table.Root>
      <Table.Header>
        <Table.Row>
          {columns.map((column, idx) => (
            <Table.ColumnHeaderCell key={idx}>{column.title}</Table.ColumnHeaderCell>
          ))}
        </Table.Row>
      </Table.Header>

      <Table.Body>
        {records.map((record) => (
          <Table.Row key={record.id}>
            {columns.map((column, idx) =>
              idx === 0 ? (
                <Table.RowHeaderCell key={`${record.id}-${idx}`}>{record[column.key]}</Table.RowHeaderCell>
              ) : (
                <Table.Cell key={`${record.id}-${idx}`}>{record[column.key]}</Table.Cell>
              )
            )}
          </Table.Row>
        ))}
      </Table.Body>
    </Table.Root>
  )
}
