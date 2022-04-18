import { DataGrid } from "@mui/x-data-grid";
import { useEffect, useState } from "react";

const columns = [
  { field: "id", headerName: "ID", width: 70 },
  { field: "filial", headerName: "Filial", width: 130 },
  { field: "serie", headerName: "Série", width: 130 },
  { field: "documento", headerName: "Documento", width: 130 },
  { field: "data_digitacao", headerName: "Data de digitação", width: 130 },
  { field: "emissao", headerName: "Data de emissão", width: 130 },
  { field: "fornecedorCod", headerName: "Codigo do fornecedor", width: 130 },
  { field: "fornecedorLoja", headerName: "Loja do fornecedor", width: 130 },
  {
    field: "valor_bruto",
    headerName: "Valor Bruto",
    type: "number",
    width: 90,
  },
  { field: "data_lancamento", headerName: "Data de lançamento", width: 90 },
  { field: "recno", headerName: "Recno", width: 70 },
];

/*
const rows = [
  {
    id: 1,
    filial: "01",
    serie: "3",
    documento: "000039234",
    data_digitacao: "20220215",
    emissao: "20220215",
    fornecedorCod: "059697",
    fornecedorLoja: "01",
    valor_bruto: 2148.24,
    data_lancamento: "20220215",
    recno: 1
  },
  {
    id: 2,
    filial: "04",
    serie: "3",
    documento: "000024549",
    data_digitacao: "20220215",
    emissao: "20220215",
    fornecedorCod: "9OMPQB",
    fornecedorLoja: "01",
    valor_bruto: 669.9,
    data_lancamento: "20220215",
    recno: 30
  }
];
*/

export function HomeView() {
  const [rows, setRows] = useState([]);
  const [errorMsg, setErrorMsg] = useState();

  useEffect(() => {
    fetch("http://127.0.0.1:3002/nfe")
      .then((response) => response.json())
      .then((data) => {
        console.log(data);
        setRows(data);
      })
      .catch(() => {
        setErrorMsg("Falha ao buscar cursos. Recarregue a página.");
      });
  }, []);

  return (
    <div style={{ height: 400, width: "100%" }}>
      <DataGrid
        rows={rows}
        columns={columns}
        pageSize={5}
        rowsPerPageOptions={[5]}
        checkboxSelection
      />
    </div>
  );
}
