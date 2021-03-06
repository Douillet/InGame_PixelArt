class Luciole2 extends ObjetPhysique{
    
    constructor(scene, x, y) 
    {
        super(scene, x, y, "luciole");
        //pas de gravité
        this.body.allowGravity=false;

        //gestion de la taille
        this.setDisplaySize(48,48);
        //blendmode
        this.blendMode='ADD';

        //on réduit un peu la zone de hit
        this.setBodySize(this.body.width-60,this.body.height-60);
        this.setOffset(30, 30);
        

        //définir les propriétés que l'on va utiliser dans notre animation

        // X
        this.originalX=x;
        this.minX=x-30;
        this.maxX=x+30;

        // Y
        this.originalY=y;
        this.minY=y-30;
        this.maxY=y+30;

        // on applique les propriétés du début de l'animation
        this.x=this.minX;
        this.y=this.minY;
        this.alpha=0;
        let me=this;

        //on fait apparaitre notre objet avec un petit delay, puis on lance l'animation
        //ceci a pour effet de décaler les animations pour ce même objet
        scene.tweens.add({
                targets: this,
                duration:400,
                //delay:Math.random()*1000,
                alpha:{
                    startDelay:Math.random()*5000,
                    from:0,
                    to:1,
                },
                onComplete: function () {
                    me.start();
                }
            })
    }

    start(){
        this.scene.tweens.add({
            targets: this,
            //pas un cercle mais bon
           x: {
                from: this.minX,
                to: this.maxX,
                duration: 10000,
                //ease: 'Circ.easeInOut',
                yoyo: 1,
                repeat:-1,
                //flipX:true,
            },
            y: {
                from: this.minY,
                to:this.maxY,
                duration: 10000,
                //ease: 'Circ.easeInOut',
                yoyo: 1,
                repeat:-1
            }
        });
    }

}