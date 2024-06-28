import { FilterType, SidebarLinkType } from "@/types";

// App DevOverflow routes
export const sidebarLinks: SidebarLinkType[] = [
    {
      imgURL: "/assets/icons/home.svg",
      route: "/home",
      label: "Home",
    },
    {
      imgURL: "/assets/icons/users.svg",
      route: "/community",
      label: "Community",
    },
    {
      imgURL: "/assets/icons/star.svg",
      route: "/collection",
      label: "Collections",
    },
    {
      imgURL: "/assets/icons/suitcase.svg",
      route: "/jobs",
      label: "Find Jobs",
    },
    {
      imgURL: "/assets/icons/tag.svg",
      route: "/tags",
      label: "Tags",
    },
    {
      imgURL: "/assets/icons/user.svg",
      route: "/profile",
      label: "Profile",
    },
    {
      imgURL: "/assets/icons/question.svg",
      route: "/ask-question",
      label: "Ask a question",
    },
  ];
  
  /** Filters */
  // DevOverflow - Home
  export const HomePageFilters: FilterType[] = [
    {
      label: "Newest",
      value: "newest",
    },
    {
      label: "Recommended",
      value: "recommended",
    },
    {
      label: "Frequent",
      value: "frequent",
    },
    {
      label: "Unanswered",
      value: "unanswered",
    },
  ];
  
  export const AnswerFilters: FilterType[] = [
    { label: "Highest Upvotes", value: "highestUpvotes" },
    { label: "Lowest Upvotes", value: "lowestUpvotes" },
    { label: "Most Recent", value: "recent" },
    { label: "Oldest", value: "old" },
  ];
  
  export const UserFilters: FilterType[] = [
    { label: "New Users", value: "new_users" },
    { label: "Old Users", value: "old_users" },
    { label: "Top Contributors", value: "top_contributors" },
  ];
  
  export const QuestionFilters: FilterType[] = [
    { label: "Most Recent", value: "most_recent" },
    { label: "Oldest", value: "oldest" },
    { label: "Most Voted", value: "most_voted" },
    { label: "Most Viewed", value: "most_viewed" },
    { label: "Most Answered", value: "most_answered" },
  ];
  
  export const TagFilters: FilterType[] = [
    { label: "Popular", value: "popular" },
    { label: "Recent", value: "recent" },
    { label: "Name", value: "name" },
    { label: "Old", value: "old" },
  ];
  
  export const GlobalSearchFilters: FilterType[] = [
    { label: "Question", value: "question" },
    { label: "Answer", value: "answer" },
    { label: "User", value: "user" },
    { label: "Tag", value: "tag" },
  ];
  