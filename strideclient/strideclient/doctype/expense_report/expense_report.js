// Copyright (c) 2023, Raghad Tareg and contributors
// For license information, please see license.txt

frappe.ui.form.on("Expense Report", {
	refresh(frm) {

// if click on btn the dialog shows 

cur_frm.cscript.new_invoice_button = function(frm) {
    
    let dialog_invoice = new frappe.ui.Dialog({
        title: 'Enter details',
        fields: [
            {
                "fieldname": "purchase_invoice",
                "fieldtype": "Data",
                "in_list_view": 1,
                "label": "Purchase invoice"
               },
               {
                "fieldname": "naming_series",
                "fieldtype": "Select",
                "in_list_view": 1,
                "label": "Series",
                "options": "PI-.YYYY.-\nEXP-.YYYY.-"
               },
               {
                "fieldname": "item_name",
                "fieldtype": "Data",
                "in_list_view": 1,
                "label": "Item name"
               },
               {
                "fieldname": "merchant",
                "fieldtype": "Data",
                "in_list_view": 1,
                "label": "merchant"
               },
               {
               "fieldname": "invoice_date",
               "fieldtype": "Date",
               "in_list_view": 1,
               "label": "Invoice date"
              },
               {
                "fieldname": "attach_receipt",
                "fieldtype": "Data",
                "in_list_view": 1,
                "label": "Attach receipt"
               },
               {
                "fieldname": "item_category",
                "fieldtype": "Data",
                "in_list_view": 1,
                "label": "Item Category"
               },
               {
                "fieldname": "invoice_total",
                "fieldtype": "Data",
                "in_list_view": 1,
                "label": "Invoice total"
               },
               {
                "fieldname": "tax_type",
                "fieldtype": "Link",
                "in_list_view": 1,
                "label": "Tax type",
                "options": "Purchase Taxes and Charges Template"
               },
               {
                "default": "0",
                "fieldname": "is_tax_inclusive",
                "fieldtype": "Check",
                "in_list_view": 1,
                "label": "Is tax inclusive"
               },
               {
                "fieldname": "tax_amount",
                "fieldtype": "Data",
                "in_list_view": 1,
                "label": "Tax amount"
               },
               {
                "fieldname": "total_tax_amount",
                "fieldtype": "Data",
                "in_list_view": 1,
                "label": "Total tax inclusive amount"
               },
               {
                "fieldname": "paid_amount",
                "fieldtype": "Data",
                "in_list_view": 1,
                "label": "Paid amount"
               },
               {
                "fieldname": "status",
                "fieldtype": "Data",
                "in_list_view": 1,
                "label": "Status",
                "read_only": 1
               },
               {
                "depends_on": "doc.docstatus == 0 ;",
                "fieldname": "create_invoice",
                "fieldtype": "Data",
                "in_list_view": 1,
                "label": "Create Invoice"
               },
               {
                "fieldname": "temporary_id",
                "fieldtype": "Data",
                "hidden": 1,
                "label": "Temporary id"
               }
        ],
        primary_action_label: 'Save',
        primary_action(values) {
            console.log(values);
            dialog_invoice.hide();
        }
    });

        dialog_invoice_list.show()


}}});

//     //create save button and callback async function to set and assign values to employees with applied filter if
//     dialog_invoice_list.set_primary_action(__("Save"), async () => {	
//         //get all dialog values as objects
//         let dialog_values = dialog_invoice_list.get_values();
//         var addchild = frm.add_child("invoice_list");
//         addchild.purchase_invoice = self.purchase_invoice
//         dialog_invoice_list.hide();
//     })

//     dialog_invoice_list.show()
//     cur_frm.refresh()



// frappe.ui.form.on("Expense Report", "Purchase Invoice expense", function(frm, cdt, cdn) {
//     cur_frm.cscript.new_invoice_button = function(doc) {
    
//     var child = locals[cdt][cdn];
//     child.purchase_invoice = "hkd"
//     cur_frm.refresh_field("purchase_invoice");
//     }});


 
// frappe.call({
//     args: {
//         holiday: holiday,
//         designation: designation ? designation : null,
//         company: company ? company : null,
//         branch: branch ? branch : null
//     },
//     callback: (response) => {
//         frappe.msgprint(__(`Assigment successful to ${response.message.affected_employees} employees`));

//     },
//     error: (r) => {
//         frappe.throw(__("Assignment failed"))
//     }
// })




    //   	//create save button and callback async function to set and assign values to employees with applied filter if
    //       dialog_invoice_list.set_primary_action(__("Save"), async () => {	
	// 		//get all dialog values as objects
	// 		let dialog_values = dialog.get_values();
    //         //make an api call to assign employees with selected filters
    //         // assign_holiday_to_employees(frm.doc.name, dialog_values.designation, dialog_values.company, dialog_values.branch)
    //         dialog_invoice_list.hide();
	// 	})

    //     dialog_invoice_list.show()
    //     cur_frm.refresh()
    // });



// frappe.ui.form.on("Expense Report", {
// 	refresh(frm) {

// // DIALOG IF CLICKED ON THE BTN
// cur_frm.cscript.new_invoice_button = function(doc) {

// frappe.ui.form.on('Expense Report', { // The child table is defined in a DoctType called "Dynamic Link"
//     invoice_list_add(frm, cdt, cdn) { // "links" is the name of the table field in ToDo, "_add" is the event
//         // frm: current ToDo form
//         // cdt: child DocType 'Dynamic Link'
//         // cdn: child docname (something like 'a6dfk76')
//         // cdt and cdn are useful for identifying which row triggered this event

//         console.log('A row has been added to the links table ');
//     }
// });}}});
 

// cur_frm.cscript.new_invoice_button = function(doc) {

// frappe.ui.form.on('Purchase Invoice expense', {
//     form_render: function(frm,cdt,cdn) {
//     //    let item = locals[cdt][cdn]; 
//     //    item.article_id = articleId;
//     //    frm.refresh_field('my_article');
//     console.log("A row has been added to the links table");
//     },
// });
// }
//     }});








 


// // this code is located inside `expense_report.js`
// cur_frm.cscript.new_invoice_button = function(doc) {
// frappe.ui.form.on("Purchase Invoice expense","item_name", function(frm, cdt, cdn) { // "invoice_list" is the name of the table field in expense_report, 

//     // The child table is defined in a DoctType called "Purchase Invoice expense"
//         //"_add" is the event
//         // frm: current ToDo form
//         // cdt: child DocType 'Dynamic Link'
//         // cdn: child docname (something like 'a6dfk76')
//         // cdt and cdn are useful for identifying which row triggered this event

//         frappe.msgprint('A row has been added to the links table 🎉 ');
// });}
// }});


// frappe.ui.form.on("Purchase Invoice expense", "item_name", function(frm, cdt, cdn){
 
// var d = locals[cdt][cdn];

// });


// // frappe.ui.form.on("Stock Entry Detail", "item_code", function(frm, cdt, cdn) {
// //     var d = locals[cdt][cdn];
    
//     if (frm.doc.purpose == "Material Receipt"){
// 	if (frm.doc.company == "Toko GBU"){
// 		//d.expense_account = "Capital Stock - tk";
//    		frappe.model.set_value(d.doctype, d.name, "expense_account", "Capital Stock - tk");
		
// 	}
// 	else{
// 		d.expense_account = "Capital Stock - pt";
// 	}

//     }
//   //msgprint(d.expense_account);

//   });
  