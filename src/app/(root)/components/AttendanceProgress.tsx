import { Progress } from "@/components/Progress"
import { css } from "@styled-system/css"

export const AttendanceProgress = ({
  label,
  total,
  value,
}: {
  label: string
  value: number
  total: number
}) => {
  return (
    <div>
      <div
        className={css({
          display: "flex",
          justifyContent: "space-between",
        })}>
        <span
          className={css({
            textStyle: "sm",
          })}>
          {label}
        </span>
        <span
          className={css({
            textStyle: "sm",
          })}>
          {total}
        </span>
      </div>
      <Progress value={value} />
    </div>
  )
}
