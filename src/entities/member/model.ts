import type { TableRow } from "@/utils/type"

export class MemberModel {
  id: string
  name: string
  attendances: (TableRow<"attendance"> & {
    sessions: TableRow<"sessions">
  })[]
  district: string
  party: TableRow<"party">
  constructor(
    init: TableRow<"member"> & {
      party_info: TableRow<"party">
      attendance: (TableRow<"attendance"> & {
        sessions: TableRow<"sessions">
      })[]
    }
  ) {
    this.id = init.id
    this.name = init.name
    this.attendances = init.attendance
    this.party = init.party_info
    this.district = init.district
  }
  static ATTENDANCE_MAPPING = {
    //db명(영어)를 한글로 매핑
    attend: "출석",
    absence: "결석",
    trip: "출장",
    permission: "청가",
    absence_request: "결석신고서",
  } as const satisfies Record<
    keyof Pick<
      TableRow<"attendance">,
      "attend" | "absence" | "trip" | "permission" | "absence_request"
    >,
    string
  >
  get result() {
    return this.attendances.reduce(
      (acc, attendance) => ({
        [MemberModel.ATTENDANCE_MAPPING.attend]:
          (acc[MemberModel.ATTENDANCE_MAPPING.attend] || 0) + attendance.attend,
        [MemberModel.ATTENDANCE_MAPPING.absence]:
          (acc[MemberModel.ATTENDANCE_MAPPING.absence] || 0) + attendance.absence,
        [MemberModel.ATTENDANCE_MAPPING.trip]:
          (acc[MemberModel.ATTENDANCE_MAPPING.trip] || 0) + attendance.trip,
        [MemberModel.ATTENDANCE_MAPPING.permission]:
          (acc[MemberModel.ATTENDANCE_MAPPING.permission] || 0) + attendance.permission,
        [MemberModel.ATTENDANCE_MAPPING.absence_request]:
          (acc[MemberModel.ATTENDANCE_MAPPING.absence_request] || 0) + attendance.absence_request,
      }),
      {
        [MemberModel.ATTENDANCE_MAPPING.attend]: 0,
        [MemberModel.ATTENDANCE_MAPPING.absence]: 0,
        [MemberModel.ATTENDANCE_MAPPING.trip]: 0,
        [MemberModel.ATTENDANCE_MAPPING.permission]: 0,
        [MemberModel.ATTENDANCE_MAPPING.absence_request]: 0,
      }
    )
  }
  get total() {
    return this.attendances.reduce((acc, attendance) => acc + attendance.sessions.total, 0)
  }
}
