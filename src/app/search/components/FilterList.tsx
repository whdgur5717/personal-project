// "use client"

// import { useState } from "react"

// import type { Database } from "@/utils/database.types"
// import { css } from "@styled-system/css"
// import { grid, stack } from "@styled-system/patterns"
// import Image from "next/image"
// import type { TableRow } from '@/utils/type'
// // import Select from "@/components/Select"

// const selected_list = [
//   "서울특별시",
//   "부산광역시",
//   "대구광역시",
//   "인천광역시",
//   "광주광역시",
//   "대전광역시",
//   "울산광역시",
//   "세종특별자치시",
//   "경기도",
//   "강원특별자치도",
//   "충청북도",
//   "충청남도",
//   "전라북도",
//   "전라남도",
//   "경상북도",
//   "경상남도",
//   "제주특별자치도",
//   "비례",
// ] as const

// type SelectOption = (typeof selected_list)[number]

// export default function FilterList({
//   initialData,
// }: {
//   initialData: TableRow<'member'>[]
// }) {
//   const [selectedData, setSelectedData] = useState<SelectOption | null>(null)
//   const filteredList = initialData.filter(data => data.filter === selectedData)

//   return (
//     <div>
//       <h2
//         className={css({
//           fontSize: "3xl",
//           fontWeight: "bold",
//           marginBottom: "1rem",
//           textAlign: "center",
//         })}>
//         국민의힘 탄핵안 불참자 리스트
//       </h2>

//       {/* <select
//         value={selectedData || ""}
//         onChange={e => setSelectedData(e.target.value as SelectOption)}
//         className={css({
//           width: "full",
//           height: "30px",
//           border: "1px solid black",
//         })}>
//         <option
//           key="default"
//           value=""
//           disabled>
//           지역 선택
//         </option>
//         {selected_list.map(data => (
//           <option
//             key={data}
//             value={data}>
//             {data}
//           </option>
//         ))}
//       </select> */}

//       {/* <Select<SelectOption>
//         options={[...selected_list]}
//         onValueChange={e => setSelectedData(e)}
//         label="지역 선택"
//         placeholder="지역 선택"></Select> */}

//       <div className={grid({ columns: [3, 4, 5], gap: [4, 6] })}>
//         {filteredList.map((politician, index) => (
//           <div
//             key={index}
//             className={css({
//               border: "1px solid #e2e8f0",
//               borderRadius: "0.5rem",
//               overflow: "hidden",
//               transition: "transform 0.2s",
//               "&:hover": { transform: "scale(1.05)" },
//             })}>
//             <div className={stack({ spaceX: "0.5rem", padding: "1rem" })}>
//               <Image
//                 src={politician.signed_url}
//                 alt={politician.name}
//                 width={120}
//                 height={120}
//                 className={css({
//                   width: "100%",
//                   height: "auto",
//                   borderRadius: "0.25rem",
//                 })}
//               />
//               <h2 className={css({ fontWeight: "semibold", textAlign: "center" })}>
//                 {politician.name}
//               </h2>
//               <p className={css({ fontSize: "sm", textAlign: "center", color: "secondary" })}>
//                 {politician.district}
//               </p>
//             </div>
//           </div>
//         ))}
//       </div>
//     </div>
//   )
// }
