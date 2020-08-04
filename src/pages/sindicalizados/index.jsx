import React, { useMemo, useState, useEffect } from 'react';
import axios from 'axios';

import DataTable from '../../components/Datatable';


function Sindicalizados() {

  const columns = useMemo(
    () => [
      {
        // first group - TV Show
        Header: "TV Show",
        // First group columns
        columns: [
          {
            Header: "Name",
            accessor: "show.name"
          },
          {
            Header: "Type",
            accessor: "show.type"
          }
        ]
      },
      {
        // Second group - Details
        Header: "Details",
        // Second group columns
        columns: [
          {
            Header: "Language",
            accessor: "show.language"
          },
          {
            Header: "Genre(s)",
            accessor: "show.genres"
          },
          {
            Header: "Runtime",
            accessor: "show.runtime"
          },
          {
            Header: "Status",
            accessor: "show.status"
          }
        ]
      }
    ],
    []
  );

  const [data, setData] = useState([]);

  // Using useEffect to call the API once mounted and set the data
  useEffect(() => {
    const fetch = async() => {
      const result = await axios("https://api.tvmaze.com/search/shows?q=snow");
      setData(result.data);
    };
    fetch();
  }, []);


  return (
    <div>
      <DataTable columns={columns} data={data} filterAccessor="show.name"/>
    </div>
  );
}

export default Sindicalizados;
