<template>
    <h1>Customers Data</h1>
    <br/>
    <button v-if="!isOperating" @click="showOperation(false)" class="addoperate">Add Data</button>
    <table id="customerstbl">
        <tr>
            <th>Name</th>
            <th>Email</th>
            <th>Phone</th>
            <th>Action</th>
        </tr>
        <tr v-for="(c, position) in customers" :key="position">
            <td> {{ c.name }} </td>
            <td> {{ c.email }} </td>
            <td> {{ c.phone }} </td>
            <td>
                <router-link :to="{ name: 'customerDetail', params: { id: c.id}}">detail</router-link> | 
                <a href="#" @click="edit({position, cust: c})">edit</a> | 
                <a href="#" @click="del(position, c.id)">delete</a>
            </td>
        </tr>
    </table>

    <Operation 
        v-if="isOperating" 
        :edit="editData" 
        @created="onCreated"
        @updated="onUpdated" 
        @canceled="isOperating = !isOperating"
    />
    
</template>

<script>
import customer from "../controller/customer"
import Operation from '@/components/Operation.vue'

export default {
    name:"CustomerView",
    components: {
        Operation
    },
    data() {
        return {
            customers: [],
            editData: null,
            isOperating: false
        }
    },
    mounted() { 
        fetch("http://localhost:3000/customers")
            .then(res => res.json())
            .then(data => this.customers = data)
    },
    methods: {
        onCreated(created) {
            console.log(created)
            this.customers.push(created)
            this.showOperation()
        },
        onUpdated(position, updated) {
            console.log("position "+ position)
            console.log(updated)
            this.customers[position] = updated
            this.showOperation()
        },
        edit(editData) {
            this.editData = editData
            this.showOperation()
        },
        async del(position, id) {
           try {
                await customer.deleteCustomer(id)
                this.customers.splice(position, 1)
           } catch (err) {
                console.log(err.message)
           }
        },
        showOperation(edit = true) {
            if (!edit) {
                this.editData = null
            }

            this.isOperating = true
        }
    }
}
</script>

<style>
    #customerstbl {
        font-family: Arial, Helvetica, sans-serif;
        border-collapse: collapse;
        width: 100%;
    }

    #customerstbl td, #customerstbl th {
        border: 1px solid #ddd;
        padding: 8px;
    }

    #customerstbl tr:nth-child(even){background-color: #f2f2f2;}

    #customerstbl tr:hover {background-color: #ddd;}

    #customerstbl th {
        padding-top: 12px;
        padding-bottom: 12px;
        text-align: left;
        background-color: #04AA6D;
        color: white;
    }

    /* Add a background color and some padding around the form */
    .container {
        border-radius: 5px;
        background-color: #f2f2f2;
        padding: 20px;
    }

    .addoperate {
        float: left;
        margin: 10px;
        padding: 10px;
        border-radius: 10%;
        background-color: #04AA6D;
        color: white;
    }

</style>