const routerPaths = {
  home: () => "/" as string,

  signup: () => "/signup" as string,
  selectedPosition: () => "/signup/info/position" as string,
  selectedSkills: () => "/signup/info/skills" as string,
  selectedIntro: () => "/signup/info/intro" as string,
  selectedProfile: () => "/signup/info/profile" as string,
  selectedWantedPosition: () => "/signup/info/wantedPosition" as string,
  matchLoading: () => "/signup/info/matchLoading" as string,

  match: () => "/match" as string,

  chat: () => "/chat" as string,
  chattingRoom: (userId: number) => `/chat/${userId}` as string,

  people: (userId: number) => `/people/${userId}` as string,
};

export default routerPaths;
