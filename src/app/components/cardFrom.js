import Field from './field'
import Label from './label'
import Input from './input'
import Button from './button'
import { redirect } from 'next/navigation'
import { insertFormData } from '../utils/supabase-client'

export async function getFormData(formData) {
  'use server'
  const name = formData.get('name')
  const email = formData.get('email')
  const experience = formData.get('experience')
  const feedback = formData.get('feedback')
  insertFormData({ name, email, experience, feedback })
  redirect('/')
}

export default function feedbackForm() {
  return (
    <form className="m-12 p-12 bg-emerald-200 border-red-600 border-2 rounded-lg" action={getFormData}>
      <Field>
        <Label htmlFor="name" label="Name" />
        <Input type="text" placeholder="Enter full name..." name="name" id="name" />
      </Field>
      <Field>
        <Label htmlFor="email" label="Email" />
        <Input type="text" placeholder="Enter email address..." name="email" id="email" />
      </Field>
      <Field>
        <Label htmlFor="experience" label="Volleyball Experience" />
        <Input type="text" placeholder="Enter volleyball experience..." name="experience" id="experience" />
      </Field>
      <Field>
        <Label htmlFor="feedback" label="Question/Feedback" />
        <Input type="text" placeholder="Enter questions and/or feedback..." name="feedback" id="feedback" />
      </Field>
      <div className="flex justify-end">
        <Button type="submit">Submit</Button>
      </div>
    </form>
  )
}
