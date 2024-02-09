import { HttpParams } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { FormArray, FormControl, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute,Params, Router } from '@angular/router';
import { Recipe } from '../../model';
import { RecipeService } from '../../recipe-service.service';

@Component({
  selector: 'app-recipe-edit',
  templateUrl: './recipe-edit.component.html',
  styleUrl: './recipe-edit.component.scss',

})
export class RecipeEditComponent implements OnInit{
   recipe:Recipe | undefined;
  initForm(){
    let recipeName=''
    let recipeImagePath=''
    let recipeDescription=''
    let recipeIngredients = new FormArray<any>([])

    if(this.editMode){
      console.log("inside edit Mode")
      //@ts-ignore
      if(this.id || this.id >= 0){
        console.log(this.id)
        //@ts-ignore
        this.recipe = this.recipeService.getRecipe(this.id);
        recipeName = this.recipe?.title
        recipeDescription = this.recipe.desc
        recipeImagePath = this.recipe.imageUrl
        console.log(recipeName)
        console.log(recipeDescription)
        console.log(recipeImagePath)
        console.log(this.recipe)
        if(this.recipe.ingredients){
          for(let ingredient of this.recipe.ingredients){
            console.log(ingredient)
           recipeIngredients.push(
              new FormGroup({
                'name':new FormControl(ingredient.ingredient,Validators.required),
                'amount':new FormControl(ingredient.quantity,[
                  Validators.required,
                  Validators.pattern(/^[1-9]+[0-9]*$/)
                ])
              })
            )
            }
        }
    console.log(recipeIngredients)
    console.log(recipeDescription)
    this.recipeForm = new FormGroup({
      'name':new FormControl(recipeName,Validators.required),
      'imagePath':new FormControl(recipeImagePath,Validators.required),
      'description':new FormControl(recipeDescription,Validators.required),
      'ingredients':recipeIngredients
    })
       // recipeIngredients = this.recipe.ingredients
       console.log(this.recipeForm)
      }
   
    }
  }
 
  ngOnInit(): void {
    this.route.params.subscribe((params:Params)=>{
       this.id = +params['id']
       this.editMode=params['id']!=null;
       this.initForm()
       console.log(this.id)
    })
  }
  id: number| null = null;
  editMode= false;
  //@ts-ignore
  recipeForm: FormGroup<any>;
  constructor(private route:ActivatedRoute,private recipeService:RecipeService, private router: Router){

    
  }
onDeleteIngredient(id: number) {
  (<FormArray>this.recipeForm.get('ingredients'))?.removeAt(id);
}
onAddIngredient() {
  (<FormArray>this.recipeForm?.get('ingredients'))
  .push(new FormGroup({
    'name':new FormControl(null,Validators.required),
    'amount':new FormControl(null,[

      Validators.required,
      Validators.pattern(/^[1-9]+[0-9]*$/)
    ])
  })
  )
}
onCancel(){
  this.router.navigate(["recipes",this.id])
}
onSubmit(){
  if(this.editMode){
    //@ts-ignore
    this.recipeService.updateRecipe(this.id,this.recipeForm.value)
  }else{
    this.recipeService.addRecipe(this.recipeForm.value);
  }
  this.onCancel()
}

getControls(): any {
     let controls = (<FormArray>this.recipeForm.get('ingredients')).controls
    return  controls
  
}

imagePath: any;

}
