import { useState, useMemo } from "react";
import { useTable } from "react-table";
import { useGlobalFilter, usePagination, useSortBy, useAsyncDebounce } from "react-table/dist/react-table.development";
import { Link } from 'react-router-dom';

const Table = (props) => {
    const columns = useMemo(() => props.columns, [props.columns]);
    const data = useMemo(() => props.data, [props.data]);
    
    const {
        getTableProps,
        getTableBodyProps,
        headerGroups,
        prepareRow,
        page,
        canPreviousPage,
        canNextPage,
        pageCount,
        gotoPage,
        nextPage,
        previousPage,
        //setPageSize,
        state: { pageIndex, pageSize },
        state,
        preGlobalFilteredRows,
        setGlobalFilter
    } = useTable({ columns, data, initialState: { pageSize: 7 }}, useGlobalFilter, useSortBy, usePagination);

    function GlobalFilter({
        preGlobalFilteredRows,
        globalFilter,
        setGlobalFilter
        }) {
        const count = preGlobalFilteredRows.length;
        const [value, setValue] = useState(globalFilter);
        const onChange = useAsyncDebounce((value) => {
            setGlobalFilter(value || undefined);
        }, 1000);
        
        return (
            <div className="dashboard__filter">
                <input className="dashboard__filter--input" value={value || ""} onChange={(e) => { setValue(e.target.value); onChange(e.target.value);}} placeholder={`${count} records...`} />
            </div>
        );
    }

    return(
        <div className="dashboard">
            <div className="dashboard__header">
                { props.title && <div className='dashboard__title'>{props.title}</div> }
                { props.globalFilter && <GlobalFilter
                    preGlobalFilteredRows={preGlobalFilteredRows}
                    globalFilter={state.globalFilter}
                    setGlobalFilter={setGlobalFilter}
                    />
                }
                {props.url && 
                    <Link to={props.url} className="btn btn--primary">Create</Link>
                }
            </div>
            <div className="dashboard__body">
                <table {...getTableProps()} className="table">
                    <thead>
                        {headerGroups.map(headerGroup => (
                        <tr {...headerGroup.getHeaderGroupProps()}>
                            {headerGroup.headers.map(column => (
                            <th {...column.getHeaderProps(column.getSortByToggleProps())}>
                                {column.render('Header')}
                                <span>{
                                    column.isSorted
                                        ? column.isSortedDesc
                                            ? ' ?'
                                            : ' ?'
                                        : ''
                                }</span>
                            </th>
                            ))}
                        </tr>
                        ))}
                    </thead>
                    <tbody {...getTableBodyProps()}>
                        {page.map(row => {
                        prepareRow(row)
                        return (
                            <tr {...row.getRowProps()}>
                            {row.cells.map(cell => {
                                return (
                                <td {...cell.getCellProps()}>
                                    {cell.render('Cell')}
                                </td>
                                )
                            })}
                            </tr>
                        )
                        })}
                    </tbody>
                </table>
            </div>
            { props.pagination && <div className="dashboard__footer">
                <div className="pagination">
                    <span className="m-r-10">
                        Page
                        <strong className="p-l-5">
                            {pageIndex + 1} of {pageCount} in {pageSize}
                        </strong>
                    </span>
                    <button className="btn btn__first ml-0" onClick={() => gotoPage(0)} disabled={!canPreviousPage}>{"<<"}</button>
                    <button className="btn btn__prev" onClick={() => previousPage()} disabled={!canPreviousPage}>{"<"}</button>
                    <button className="btn btn__next" onClick={() => nextPage()} disabled={!canNextPage}>{">"}</button>
                    <button className="btn btn__last" onClick={() => gotoPage(pageCount - 1)} disabled={!canNextPage}>{">>"}</button>
                    
                    {/* <span>
                        | Go to page:
                        <input
                            type="number"
                            defaultValue={pageIndex + 1}
                            onChange={(e) => {
                            const page = e.target.value ? Number(e.target.value) - 1 : 0;
                            gotoPage(page);
                            }}
                            style={{ width: "100px" }}
                        />
                    </span> */}
                    {/* <select value={pageSize} onChange={(e) => { setPageSize(Number(e.target.value));}}>
                        {[2, 10, 20, 30, 40, 50].map((pageSize) => (
                            <option key={pageSize} value={pageSize}>
                            Show {pageSize}
                            </option>
                        ))}
                    </select> */}
                </div>
            </div> }
        </div>
    )
}

export default Table;