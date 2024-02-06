import { UseCard } from '~/app/(main)/use/UseCard'
import { getUses } from '~/sanity/queries'

export async function Use() {
  const uses = (await getUses())?.uses || []
  console.log('uses:', uses)

  return (
    <ul
      role="list"
      className="grid grid-cols-1 gap-x-12 gap-y-16 sm:grid-cols-2 lg:grid-cols-3"
    >
      {uses.map((use) => (
        <UseCard project={use} key={use._id} />
      ))}
    </ul>
  )
}
