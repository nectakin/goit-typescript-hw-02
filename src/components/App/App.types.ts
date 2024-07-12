
export interface Modal {
  isOpen: boolean;
  url: string;
  description: string;
}

export type HandleImageClick = ({
  url,
  description,
}: Pick<Modal, 'url' | 'description'>) => void;

export type HandleModalClose = () => void;

export type HandleLoadMoreClick = () => void;

export type HandleSearch = (newQuery: string) => void;
