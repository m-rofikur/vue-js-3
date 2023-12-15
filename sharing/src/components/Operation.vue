<template>
   <div class="container">
        <h3>Customer Operation</h3>
        <form @submit.prevent="submitForm" method="post">
            <input type="text" name="name" v-model="formData.name" placeholder="name">
            <input type="text" name="email" v-model="formData.email" placeholder="email">
            <input type="text" name="phone" v-model="formData.phone" placeholder="phone">
            <input type="submit" value="Submit">
            <input @click="$emit('canceled')" type="button" value="Cancel">
        </form>
    </div>
</template>

<script>
import customer from "../controller/customer"
import { ref, watch } from 'vue'
export default {
    name:"Operation",
    props: ['edit'],
    setup(props, {emit}) {
        const formData = ref({
            id: null,
            name: '',
            email: '',
            phone: '',
        });

        if (props.edit != null) {
            formData.value = { ...props.edit.cust };
        }

        watch(() => props.edit, (newEditValue) => {
            if (newEditValue != null) {
                formData.value = { ...newEditValue.cust };
            }
        });
  
        const submitForm = async () => {
          try {
            if (formData.value.id != null || formData.value.id != undefined) {
                let nd = await customer.updateCustomer(formData.value)
                if (nd.id != null) {
                    emit("updated", props.edit.position, nd)
                    resetForm()
                }

            } else {
                let nd = await customer.createCustomer(formData.value)
                if (nd.id != null) {
                    emit("created", nd)
                    resetForm()
                }
            }

          } catch (e) {
            console.log(e)
          }
        }

        const resetForm = () => {
            formData.value = {
                id: null,
                name: '',
                email: '',
                phone: '',
            };
        };

        return {
            formData, submitForm
        }
    }
}
</script>

<style>
 /* Style inputs with type="text", select elements and textareas */
 input[type=text], select, textarea {
        width: 100%; /* Full width */
        padding: 12px; /* Some padding */ 
        border: 1px solid #ccc; /* Gray border */
        border-radius: 4px; /* Rounded borders */
        box-sizing: border-box; /* Make sure that padding and width stays in place */
        margin-top: 6px; /* Add a top margin */
        margin-bottom: 16px; /* Bottom margin */
        resize: vertical /* Allow the user to vertically resize the textarea (not horizontally) */
    }

    /* Style the submit button with a specific background color etc */
    input[type=submit] {
        background-color: #04AA6D;
        color: white;
        padding: 12px 20px;
        border: none;
        border-radius: 4px;
        cursor: pointer;
    }

    input[type=button] {
        background-color: #ff5e00;
        color: white;
        padding: 12px 20px;
        border: none;
        border-radius: 4px;
        cursor: pointer;
    }

    /* When moving the mouse over the submit button, add a darker green color */
    input[type=submit]:hover {
        background-color: #45a049;
    }
</style>