export const convertToPosition = (devName: string) => {
  switch (devName) {
    case "BACK_END":
      return "백엔드 개발자";
    case "FRONT_END":
      return "프론트엔드 개발자";
    case "PM_PO":
      return "PM/PO";
    case "DESIGNER":
      return "디자이너";
  }
};
