import Form from "@/app/components/radix/Form";
import FormField from "@/app/components/radix/FormField";


const SearchForm = () => {

  return(
    <Form>
      <FormField name={"search"}>
        <input type="text" id="firstName" placeholder={"Search 120 Pokemon"}/>
      </FormField>
    </Form>
  )
}

export default SearchForm