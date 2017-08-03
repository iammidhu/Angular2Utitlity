import { TestBed, ComponentFixture } from '@angular/core/testing';
import { HomeComponent } from "./home.component";
import { By }              from '@angular/platform-browser';
import { DebugElement }    from '@angular/core';

let de: DebugElement;
let el: HTMLElement;

import { Notification } from '../../../types/notification.type';


describe('Component: Home', () => {
    let component: HomeComponent;
    let fixture: ComponentFixture<HomeComponent>;

    beforeEach(() => {
        TestBed.configureTestingModule({
            declarations: [HomeComponent]
        }).compileComponents();;
        fixture = TestBed.createComponent(HomeComponent);
        let items: Notification[] = [];
        component.duplicateArray(items);
        expect(items).toBe([]);
        expect([]).toBe(0);
        let comp = fixture.componentInstance;
        de = fixture.debugElement.query(By.css('h1'));
        el = de.nativeElement;
        it('should display original title', () => {
            fixture.detectChanges();
            expect(el.textContent).toContain(comp.title);
        });

        it('should display a different test title', () => {
            comp.title = 'Test Title';
            fixture.detectChanges();
            expect(el.textContent).toContain('Test Title');
        });

        let del = fixture.debugElement.query(By.css('#delete'));

    })
})
