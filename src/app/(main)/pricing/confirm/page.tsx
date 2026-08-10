import ConfirmUpgradePage from "@/features/pricing/confirm/ConfirmUpgradePage";
async function Confirm({searchParams}:{
  searchParams: Promise<{
    plan: string
  }>
}){
  return (
    <ConfirmUpgradePage searchParams={searchParams}/>
  )
}

export default Confirm