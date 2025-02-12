export class PaginationResultModel<T>{
  datas:T;
  pageNumber:number=1;
  pageSize:number=10;
  totalPageCount:number=0;
  isFirstPage:boolean=true;
  isLastPage:boolean=true;
}
