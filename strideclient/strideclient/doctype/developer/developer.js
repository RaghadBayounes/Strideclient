// Copyright (c) 2023, Raghad Tareg and contributors
// For license information, please see license.txt


 
frappe.ui.form.on("Developer", {
    refresh: function(frm) {

     frm.add_custom_button(__('Btn1'), function(){
        frappe.msgprint({
            title: __('Notification!!'),
            message: __('Thank you!')})
        }, __("Options"));
}});


// frappe.msgprint({
//     title: __('Notification!'),
//     indicator: 'green',
//     message: __('Sorry, your information is not saved!')})
// }, __("Options"));

// frappe.msgprint(__('Thank you, your information saved!'));

//    frm.add_custom_button(__('Not yet'), function(){
//     frappe.msgprint({
//         title: __('Notification!'),
//         indicator: 'green',
//         message: __('Sorry, your information is not saved!')})
//     }, __("Options"));

     
 

// frappe.ui.form.on("Developer", {
// 	refresh (frm) {
//             frm.add_custom_button(__('Done'), function(){
//         }, __("Options"));
//         frappe.msgprint(__('Document updated successfully'));

//         frm.add_custom_button(__('Not yet'), function(){
//     }, __("Options"));
//             }
//         });
 
 