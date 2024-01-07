import React, { useState } from 'react';
import { useForm } from 'react-hook-form';
import { IoSearch } from "react-icons/io5";
import { RiDeleteBin6Line } from "react-icons/ri";
import InfiniteScroll from 'react-infinite-scroll-component';
import api from '../../api';
import FormImputDash from '../../components/FormDash/FormInputDash';
import FormResponsibleUser from '../../components/FormDash/FormResponsibleUser';
import FormSelectDash from '../../components/FormDash/FormSelectDash';
import Header from '../../components/HeaderDash';
import { ClientsContainer, Dashboard, FormDiv } from './style';

interface SearchProps {
    searchContent: string;
    searchFor: string;
    userResponsible: string;
}

interface ClientsData {
    Id: number;
    TypeId: number;
    Name: string;
    LegalName?: any;
    Register?: any;
    CNPJ?: any;
    CPF?: any;
    StatusId: number;
    CompanyId?: any;
    RelationshipId?: any;
    OriginId?: any;
    ClassId: number;
    OwnerId: string;
    Note?: any;
    Email: string;
    Website?: any;
    RoleId?: any;
    DepartmentId?: any;
    Skype?: any;
    Facebook?: any;
    StreetAddress?: any;
    StreetAddressNumber?: any;
    StreetAddressLine2?: any;
    Neighborhood?: any;
    ZipCode?: any;
    ForeignZipCode?: any;
    CityId?: any;
    StateId?: any;
    CountryId?: any;
    CurrencyId?: any;
    CNAESecondary?: any;
    FirstTaskId?: any;
    FirstTaskDate?: any;
    LastInteractionRecordId?: any;
    LastDealId?: any;
    LastOrderId?: any;
    TasksOrdination: number;
    LeadId?: any;
    Editable: boolean;
    Deletable: boolean;
    CreatorId: number;
    UpdaterId: number;
    CreateDate: string;
    LastUpdateDate: string;
    Key?: any;
    LastDocumentId?: any;
    AvatarUrl?: any;
}

const getClients = async (url: string) => {
    try {
        const response = await api.get(url);
        const clients = response.data.value;
        return clients;
    } catch (error) {
        console.error("Ops! Ocorreu um erro", error);
        return [];
    }
};

const DashboardPage: React.FC = () => {
    const { register, handleSubmit } = useForm<SearchProps>();
    const [clients, setClients] = useState<ClientsData[]>([]);


    const searchUrl = async (data: SearchProps) => {
        let urlContent = "";
        let urlResponsible = "";

        if (data.userResponsible != "1") {
            urlResponsible = `+and+OwnerId+eq+${data.userResponsible}`
        } else {
            urlResponsible = "";
        }

        if (data.searchFor == "1") {
            urlContent = `$filter=(contains(Name,'${data.searchContent}')${urlResponsible})&$select=Id,Name,OwnerId,AvatarUrl,CNPJ,Email`
        } else if (data.searchFor == "2") {
            urlContent = `$filter=(Phones/any(p:+(contains(cast(p/SearchPhoneNumber,+%27Edm.String%27),'${data.searchContent}')))${urlResponsible})&$select=Id,Name,OwnerId,AvatarUrl,CNPJ,Email`
        } else if (data.searchFor == "3") {
            urlContent = `$filter=(contains(Email,'${data.searchContent}')${data.userResponsible})&$select=Id,Name,OwnerId,AvatarUrl,CNPJ,Email`
        }

        const finalUrl = `/Contacts?${urlContent}`;
        const clientsData = await getClients(finalUrl);
        setClients(clientsData);
    }

    const DeleteClient: React.MouseEventHandler<HTMLButtonElement> = async (event) => {
        event.preventDefault();
        const clientId = event.currentTarget.dataset.clientId;

        const deleteClient = async (id: string) => {
            try {
                await api.delete(`/Contacts(${id})`);
                console.log("Cliente deletado com sucesso");
                const updatedClients = await getClients("/Contacts");
                setClients(updatedClients);
            } catch (error) {
                console.error("Erro ao deletar cliente", error);
            }
        };

        if (clientId) {
            await deleteClient(clientId);
        }
    };

    return (
        <Dashboard>
            <Header />
            <form action="" id="search" onSubmit={handleSubmit(searchUrl)}>
                <FormDiv>
                    <FormImputDash {...register('searchContent')} />
                    <label>Buscar por:</label>
                    <FormSelectDash {...register('searchFor')} />
                    <label>Filtrar por usuário:</label>
                    <FormResponsibleUser {...register('userResponsible')} />
                    <button type="submit"><IoSearch size="1.5em" /></button>
                </FormDiv>
            </form>
            <ClientsContainer>
                <InfiniteScroll
                    dataLength={clients.length}
                    next={function () { throw new Error('Function not implemented.'); }}
                    hasMore={false}
                    loader={undefined}
                    height={600}
                >
                    <table>
                        <thead>
                            <tr>
                                <th>Logo</th>
                                <th>Nome</th>
                                <th>CNPJ</th>
                                <th>E-mail</th>
                                <th><span>Excluir</span></th>
                            </tr>
                        </thead>
                        <tbody>

                            {clients.map(client => (
                                <tr key={client.Id}>
                                    <td><img src={client.AvatarUrl} alt="Logo do cliente" /></td>
                                    <td><h1>{client.Name}</h1></td>
                                    <td>{client.CNPJ}</td>
                                    <td>{client.Email}</td>
                                    <td>
                                        <button onClick={(e) => DeleteClient(e)} data-client-id={client.Id}>
                                            <p>Excluir</p>
                                            <RiDeleteBin6Line />
                                        </button>
                                    </td>
                                </tr>
                            ))}
                        </tbody>
                    </table>
                </InfiniteScroll>
            </ClientsContainer>
        </Dashboard >
    );
}

export default DashboardPage;