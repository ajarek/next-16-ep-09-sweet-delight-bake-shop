"use client"

import { zodResolver } from "@hookform/resolvers/zod"
import { Controller, useForm } from "react-hook-form"
import { toast } from "sonner"
import * as z from "zod"

import { Button } from "@/components/ui/button"
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card"
import {
  Field,
  FieldError,
  FieldGroup,
  FieldLabel,
} from "@/components/ui/field"
import { Input } from "@/components/ui/input"
import {
  InputGroup,
  InputGroupAddon,
  InputGroupText,
  InputGroupTextarea,
} from "@/components/ui/input-group"
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select"
import { updateProduct } from "@/lib/actions/updateProduct"

const formSchema = z.object({
  name: z
    .string()
    .min(5, "Nazwa musi zawierać co najmniej 5 znaków.")
    .max(32, "Nazwa musi zawierać co najwyżej 32 znaków."),
  price: z.coerce
    .number()
    .min(1, "Cena musi być co najmniej 1.")
    .max(10000, "Cena musi być co najwyżej 10000."),
  description: z
    .string()
    .min(20, "Opis musi zawierać co najmniej 20 znaków.")
    .max(100, "Opis musi zawierać co najwyżej 100 znaków."),
  category: z.string().min(1, "Kategoria jest wymagana."),
  image: z.string().min(1, "Obrazek jest wymagany."),
  quantity: z.coerce.number().min(1, "Ilość jest wymagana."),
})

type Product = {
  id: number
  name: string
  price: number
  description: string
  category: string
  image: string
  quantity: number
}

interface EditProductFormClientProps {
  product: Product | null
}

export const EditProductFormClient = ({
  product,
}: EditProductFormClientProps) => {
  const form = useForm({
    resolver: zodResolver(formSchema),
    defaultValues: {
      name: product?.name || "",
      price: product?.price || 0,
      description: product?.description || "",
      category: product?.category || "",
      image: product?.image || "",
      quantity: product?.quantity || 0,
    },
  })

  async function onSubmit(data: z.infer<typeof formSchema>) {
    if (!product) return

    const payload = {
      id: product.id,
      ...data,
    }
   
    await updateProduct(payload)
    toast("Produkt został zaktualizowany.", {
      description: "Produkt został zaktualizowany.",
    })
    console.log(payload)
    form.reset()
  }

  return (
    <Card className='w-full '>
      <CardHeader>
        <CardTitle className='text-2xl'>Edycja Produktu</CardTitle>
        <CardDescription>Poprawa lub edycja produktu.</CardDescription>
      </CardHeader>
      <CardContent>
        <form id='form-rhf-demo' onSubmit={form.handleSubmit(onSubmit)}>
          <FieldGroup>
            <div className='grid grid-cols-1 md:grid-cols-2 gap-4'>
              <Controller
                name='name'
                control={form.control}
                render={({ field, fieldState }) => (
                  <Field data-invalid={fieldState.invalid}>
                    <FieldLabel htmlFor='form-rhf-demo-title'>
                      Nazwa Produktu
                    </FieldLabel>
                    <Input
                      {...field}
                      id='form-rhf-demo-title'
                      aria-invalid={fieldState.invalid}
                      placeholder='Nazwa Produktu'
                      autoComplete='off'
                    />
                    {fieldState.invalid && (
                      <FieldError errors={[fieldState.error]} />
                    )}
                  </Field>
                )}
              />
              <Controller
                name='price'
                control={form.control}
                render={({ field, fieldState }) => (
                  <Field data-invalid={fieldState.invalid}>
                    <FieldLabel htmlFor='form-rhf-demo-title'>Cena</FieldLabel>
                    <Input
                      {...field}
                      value={field.value as string | number}
                      id='form-rhf-demo-title'
                      aria-invalid={fieldState.invalid}
                      placeholder='Cena Produktu'
                      autoComplete='off'
                      type='number'
                    />
                    {fieldState.invalid && (
                      <FieldError errors={[fieldState.error]} />
                    )}
                  </Field>
                )}
              />
            </div>
            <div className='grid grid-cols-1 md:grid-cols-2 gap-4'>
              <Controller
                name='description'
                control={form.control}
                render={({ field, fieldState }) => (
                  <Field data-invalid={fieldState.invalid}>
                    <FieldLabel htmlFor='form-rhf-demo-description'>
                      Opis
                    </FieldLabel>
                    <InputGroup>
                      <InputGroupTextarea
                        {...field}
                        id='form-rhf-demo-description'
                        placeholder='Opis produktu.'
                        rows={6}
                        className='min-h-24 resize-none'
                        aria-invalid={fieldState.invalid}
                      />
                      <InputGroupAddon align='block-end'>
                        <InputGroupText className='tabular-nums'>
                          {field.value.length}/100 znaków
                        </InputGroupText>
                      </InputGroupAddon>
                    </InputGroup>
                    {fieldState.invalid && (
                      <FieldError errors={[fieldState.error]} />
                    )}
                  </Field>
                )}
              />
              <Controller
                name='category'
                control={form.control}
                render={({ field, fieldState }) => (
                  <Field
                    orientation='responsive'
                    data-invalid={fieldState.invalid}
                  >
                    <div className='flex flex-col gap-2 items-start'>
                      <FieldLabel htmlFor='form-rhf-select-category'>
                        Kategoria
                      </FieldLabel>

                      <Select
                        name={field.name}
                        value={field.value}
                        onValueChange={field.onChange}
                      >
                        <SelectTrigger
                          id='form-rhf-select-category'
                          aria-invalid={fieldState.invalid}
                          className='w-full min-w-[300px] sm:min-w-[600px]'
                        >
                          <SelectValue placeholder='Wybierz Kategorie' />
                        </SelectTrigger>
                        <SelectContent position='item-aligned'>
                          <SelectItem value='Ciasto'>Ciasto</SelectItem>
                          <SelectItem value='Desery'>Desery</SelectItem>
                          <SelectItem value='Chleb'>Chleb</SelectItem>
                          <SelectItem value='Napoje'>Napoje</SelectItem>
                        </SelectContent>
                      </Select>
                    </div>
                  </Field>
                )}
              />
              <Controller
                name='image'
                control={form.control}
                render={({ field, fieldState }) => (
                  <Field
                    orientation='responsive'
                    data-invalid={fieldState.invalid}
                  >
                    <div className='flex flex-col gap-2 items-start'>
                      <FieldLabel htmlFor='form-rhf-select-category'>
                        Obrazek
                      </FieldLabel>

                      <Input
                        {...field}
                        type='text'
                        placeholder='URL obrazka'
                        className='w-full min-w-[300px] sm:min-w-[600px]'
                      />
                    </div>
                  </Field>
                )}
              />
              <Controller
                name='quantity'
                control={form.control}
                render={({ field, fieldState }) => (
                  <Field data-invalid={fieldState.invalid}>
                    <FieldLabel htmlFor='form-rhf-demo-quantity'>
                      Ilość
                    </FieldLabel>
                    <Input
                      {...field}
                      value={field.value as string | number}
                      id='form-rhf-demo-quantity'
                      aria-invalid={fieldState.invalid}
                      placeholder='Ilość Produktu'
                      autoComplete='off'
                      type='number'
                    />
                    {fieldState.invalid && (
                      <FieldError errors={[fieldState.error]} />
                    )}
                  </Field>
                )}
              />
            </div>
          </FieldGroup>
        </form>
      </CardContent>
      <CardFooter>
        <Field orientation='horizontal'>
          <Button
            type='button'
            variant='outline'
            onClick={() => form.reset()}
            className='w-1/2 '
          >
            Reset
          </Button>
          <Button type='submit' form='form-rhf-demo' className='w-1/2 '>
            Zapisz
          </Button>
        </Field>
      </CardFooter>
    </Card>
  )
}
