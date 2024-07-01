type UserType = {
  name: string;
  avatar: string;
};

type TagsType = {
  _id: number;
  name: string;
  totalQuestions?: number;
};

export type QuestionCardDataType = {
  _id: number;
  title: string;
  description: string;
  tags: TagsType[];
  user: UserType;
  upvotes: number;
  createdAt: string;
  votes: number;
  views: number;
  answers: number;
};
