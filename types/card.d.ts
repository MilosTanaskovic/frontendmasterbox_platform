type AuthorType = {
  _id: string;
  name: string;
  picture: string;
};

type TagsType = {
  _id: string;
  name: string;
  totalQuestions?: number;
};

export type QuestionCardDataType = {
  _id: string;
  title: string;
  description: string;
  tags: TagsType[];
  author: AuthorType;
  upvotes: number;
  createdAt: Date;
  votes: number;
  views: number;
  answers: Array<object>;
};
