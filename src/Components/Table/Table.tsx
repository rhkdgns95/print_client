import React from "react";
import styled from "../../styles/typed-components";


const Container = styled.div`

`;
const TableField = styled.table`
    border-collapse: collapse;
    border-spacing: 0;
`;
const Thead = styled.thead``;
const Tbody = styled.tbody``;
const Tr = styled.tr``;
const Th = styled.th`
    text-align: left;
    color: #a3ae1d;
    font-weight: 500;
`;
const Td = styled.td`
    padding: 20px 10px;
    color: #5f5f5e;
`;

interface IFormGroup {

}
interface IProps {
    className: string;
    checkedEmail: boolean;
    email?: string;
    groupName?: string;
}
const Table: React.FC<IProps> = ({
    className,
    checkedEmail,
    email,
    groupName

}) => (
    <Container className={className}>
        <TableField>
            <Thead>
            </Thead>
            <Tbody>
                <Tr>
                    <Th>Grouping Name </Th>
                    <Td>{groupName}</Td>
                </Tr>
                {
                    checkedEmail && (
                        <Tr>
                            <Th>Email</Th>
                            <Td>{email}</Td>
                        </Tr>
                    )
                }
                
            </Tbody>
        </TableField>
    </Container>
);

export default Table;