import {FC} from "react";

interface IProps {
  id: string|number
}

const IdBadge:FC<IProps> = ({id}) => {
  return(
    <div className={"absolute right-8 -top-4 bg-white px-3 py-1 rounded-3xl border font-semibold"}>#{('000'+id).slice(-3)}</div>
  )
}

export default IdBadge