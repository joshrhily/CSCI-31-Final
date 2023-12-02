import { Table } from '@radix-ui/themes'

const defautlColumns = [
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

const defaultRecords = [
  {
    title: 'Player Name',
    subtitle: 'Position/Role',
    image: 'http://placekitten.com/650/650',
    description: 'Player info',
  },
]

export default function MyTable({ columns = defautlColumns, records = defaultRecords }) {
  return (
    <Table.Root>
      <Table.Header>
        <Table.Row>
          {columns.map((column) => (
            <Table.ColumnHeaderCell>{column.title}</Table.ColumnHeaderCell>
          ))}
        </Table.Row>
      </Table.Header>

      <Table.Body>
        {records.map((record) => (
          <Table.Row>
            {columns.map((column, idx) =>
              idx === 0 ? (
                <Table.RowHeaderCell>{record[column.key]}</Table.RowHeaderCell>
              ) : (
                <Table.Cell>{record[column.key]}</Table.Cell>
              )
            )}
          </Table.Row>
        ))}
      </Table.Body>
    </Table.Root>
  )
}
