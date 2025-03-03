declare namespace API {
  interface IResultModal<T> {
    code: number;
    msg: string;
    data: T;
  }

  interface IPagingResultModal<T> {
    code: number;
    msg: string;
    data: T;
    paging: {
      total_count: number;
      page_count: number;
      page_size: number;
      current_page: number;
    };
  }

  interface IResultInfo {
    code: number;
    msg: string;
  }

  interface IPaginated {
    page: number;
    page_size: number;
  }
}
