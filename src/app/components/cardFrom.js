import { insertCard } from '../utils/supabase-client'
import Field from './field'
import Label from './label'
import Input from './input'
import Button from './button'
import { redirect } from 'next/navigation'

async function createCard(formData) {
  'use server'
  // get each field out of formData
  const title = formData.get('title')
  const subtitle = formData.get('subtitle')
  const image = formData.get('image')
  const description = formData.get('description')
  insertCard({ title, subtitle, image, description })
  redirect('/')
  // call supabase-client insertCard
}

//className="my-12 mx-36 p-4 bg-emerald-400 rounded-xl"
export default function CardForm() {
  return (
    <form action={createCard}>
      <Field>
        <Label htmlFor="title" label="Title" />
        <Input type="text" placeholder="Enter title..." name="title" id="title" />
      </Field>
      <Field>
        <Label htmlFor="subtitle" label="Subtitle" />
        <Input type="text" placeholder="Enter subtitle..." name="subtitle" id="subtitle" />
      </Field>
      <Field>
        <Label htmlFor="image" label="Image URL" />
        <Input type="text" placeholder="Enter image URL..." name="image" id="image" />
      </Field>
      <Field>
        <Label htmlFor="description" label="Description" />
        <Input type="text" placeholder="Enter description..." name="description" id="description" />
      </Field>
      <div className="flex justify-end">
        <Button type="submit">Add Card</Button>
      </div>
    </form>
  )
}
