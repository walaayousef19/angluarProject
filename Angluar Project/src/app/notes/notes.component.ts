import { Component, OnInit } from '@angular/core';
import { FormArray, FormBuilder, Validators } from '@angular/forms';
import { validate } from '../Custom Validator/name.validator';

@Component({
  selector: 'app-notes',
  templateUrl: './notes.component.html',
  styleUrls: ['./notes.component.scss']
})
export class NotesComponent implements OnInit {

  productsArr:string[]=["Phone","T-shirt" ];

  NoteForm=this.fb.group({
    Name :['',validate(/Admin/)],
    products:[''],
    discount:[false],
    alternativeComment:this.fb.array([])
  })

  get Name ()
  {
    return this.NoteForm.get('Name');
  }
  get products ()
  {
    return this.NoteForm.get('products');
  }
  get discount ()
  {
    return this.NoteForm.get('discount');
  }
 
  constructor(private fb:FormBuilder) { }
  ngOnInit(): void {
  }

 

get alternativeComments ()
{
  return this.NoteForm.get('alternativeComment') as FormArray;
}

removeComment(controlIndex:number)
{
  this.alternativeComments.removeAt(controlIndex);
}

addNewComment()
{
  this.alternativeComments.push(this.fb.control(''))
}
setNameToRequired(){
  this.NoteForm.get('discount')?.valueChanges.subscribe(checkValue=>{
    if(checkValue){
      const name=this.NoteForm.get('Name');
      name?.setValidators(Validators.required);
    }
    else{
      this.Name?.clearValidators();
    }
    this.Name?.updateValueAndValidity();
  })
}
}