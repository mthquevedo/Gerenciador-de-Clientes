import { useForm } from 'react-hook-form';
import { IoSearch } from "react-icons/io5";
import Header from '../../components/HeaderDash';
import FormImputDash from '../../components/FormDash/FormInputDash';
import FormResponsibleUser from '../../components/FormDash/FormResponsibleUser';
import FormSelectDash from '../../components/FormDash/FormSelectDash';
import { Dashboard, FormDiv } from './style';

interface SearchProps {
    searchContent: string;
    searchFor: string;
    userResponsible: string;
}

function DashboardPage() {

    //const search = localStorage.getItem("searchUrl");

    //console.log(search);

    const { register, handleSubmit } = useForm<SearchProps>()

    const searchUrl = (data: SearchProps) => {

        let urlContent = "";
        let urlResponsible = "";

        if (data.searchFor == "1") {
            urlContent = `$filter=(contains(Name,'${data.searchContent}'))&$select=Id,Name,OwnerId`
        } else if (data.searchFor == "2") {
            urlContent = `$filter=(Phones/any(p:+(contains(cast(p/SearchPhoneNumber,+%27Edm.String%27),'${data.searchContent}'))))&$select=Id,Name,OwnerId`
        } else if (data.searchFor == "3") {
            urlContent = `$filter=(contains(Email,'${data.searchContent}'))&$select=Id,Name,OwnerId`
        }

        if (data.userResponsible != "1") {
            urlResponsible = `&$filter=OwnerId+eq+${data.userResponsible}`
        }

        const finalUrl = urlContent + urlResponsible
        console.log(finalUrl)

    }

    return (
        <Dashboard>
            <Header />
            <form action="" id="search" onSubmit={handleSubmit(searchUrl)}>
                <FormDiv>
                    <FormImputDash {...register('searchContent')} />
                    <label>Buscando por:</label>
                    <FormSelectDash {...register('searchFor')} />
                    <label>Filtro por usuário:</label>
                    <FormResponsibleUser {...register('userResponsible')} />
                    <button type="submit"><IoSearch size="1.5em" /></button>
                </FormDiv>
            </form>
        </Dashboard>
    );
}

export default DashboardPage;
