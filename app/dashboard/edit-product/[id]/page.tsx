import { EditProductFormClient } from "@/components/EditProductFormClient"
import { getProductById } from "@/lib/actions/getProductById"

export default async function EditProductPage({
  params,
}: {
  params: Promise<{ id: string }>
}) {
  const { id } = await params
  const product = await getProductById(+id)

  return <EditProductFormClient product={product} />
}
