import Ember from 'ember';

export default Ember.Controller.extend({
  actions: {
    saveRecords() {
        let student_id = $("#student_id").val();
            let name = $("#name").val();
            let email = $("#email").val();
            let dob = $("#dob").val();
            let gender = $('input[name=gender]:checked').val();
            let nationality= $("#nationality").val();
            let address= $("#address").val();
            let fathername= $("#fathername").val();
            let mothername= $("#mothername").val();
            let spouse_name= $("#spouse_name").val();
            let primary_school = $("#primary_school").val();
            let secondary_school = $("#secondary_school").val();
            let senior_secondary_school = $("#senior_secondary_school").val();
            let higher_secondary_school = $("#higher_secondary_school").val();
            let graduation = $("#graduation").val();
            let post_graduation = $("#post_graduation").val();
            let co_curricular= $("#co_curricular").val();
            let etc_curricular= $("#etc_curricular").val();
            let achievements= $("#achievements").val();

            let param={};
            param["name"]=name;
            param["email"]=email;
            param["dob"]=dob;
            param["gender"]=gender;
            param["nationality"]=nationality;
            param["address"]=address;
            param["father_name"]=fathername;
            param["mother_name"]=mothername;
            param["spouse_name"]=spouse_name;
            param["primary_school"]=primary_school;
            param["secondary_school"]=secondary_school;
            param["senior_secondary_school"]=senior_secondary_school;
            param["higher_secondary_school"]=higher_secondary_school;
            param["graduation"]=graduation;
            param["post_graduation"]=post_graduation;
            param["co_curricular"]=co_curricular;
            param["extra_curricular"]=etc_curricular;
            param["archivements"]=achievements;

        let rec = this.store.findRecord('student', student_id);
        let slf= this;
        rec.then(function(student) {
            for (var key in param) {
                if (param.hasOwnProperty(key)) {
                    student.set(key,param[key]);
                }
            }


            student.save();
            slf.transitionToRoute('student');
         });
    }
  }
});
