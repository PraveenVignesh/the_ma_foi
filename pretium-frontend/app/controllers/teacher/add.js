import Ember from 'ember';

export default Ember.Controller.extend({
	init: function () {
	},
	actions: {
        saveRecords() {
        	let name = $("#name").val();
        	let designation = $("#designation").val();
            let dob = $("#dob").val();
            let gender = $('input[name=gender]:checked').val();
            let nationality= $("#nationality").val();
            let marital_status= $("#marital_status").val();
            let spouse_name= $("#spouse_name").val();
            let contact_number= $("#contact_number").val();
            let secondary_school = $("#secondary_school").val();
            let senior_secondary_school = $("#senior_secondary_school").val();
            let graduation = $("#graduation").val();
            let post_graduation = $("#post_graduation").val();
            
        	let param={};
        	param["name"]=name;
            param["designation"]=designation;
            param["dob"]=dob;
            param["gender"]=gender;
            param["nationality"]=nationality;
            param["marital_status"]=marital_status;
            param["spouse_name"]=spouse_name;
            param["contact_number"]=contact_number;
            param["secondary_school"]=secondary_school;
            param["senior_secondary_school"]=senior_secondary_school;
            param["graduation"]=graduation;
            param["post_graduation"]=post_graduation;
            var post = this.store.createRecord('teacher', param);
            var thisObj = this;
            post.save().then((savedRecord) => {
                thisObj.transitionToRoute('teacher.view',savedRecord);
            }).catch((xhr) => {
                console.log("error occurred and res status ", xhr);
                thisObj.transitionToRoute('/');
                Materialize.toast('An error occurred, Please try again later', 4000); // 4000 is the duration of the toast
            });
        }
    }
});